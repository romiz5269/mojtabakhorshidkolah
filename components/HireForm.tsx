"use client";

import {motion, AnimatePresence} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  DollarSign,
  Mail,
  MessageSquare,
  Send,
  User,
  Building2,
} from "lucide-react";
import {FormEvent, useState} from "react";

type InquiryType = "project" | "job" | "collaboration" | "other";

interface FormData {
  type: InquiryType | "";
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

const inquiryTypes = [
  {
    id: "project",
    title: "Start a Project",
    description: "I have a project in mind",
    icon: Code2,
  },
  {
    id: "job",
    title: "Hire Me",
    description: "I have a job opportunity",
    icon: BriefcaseBusiness,
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Let's build something together",
    icon: Building2,
  },
  {
    id: "other",
    title: "Something Else",
    description: "I have another question",
    icon: MessageSquare,
  },
];

const budgets = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

const steps = [
  {
    title: "Let's start",
    description: "What can I help you with?",
  },
  {
    title: "A little about you",
    description: "Tell me how I can reach you.",
  },
  {
    title: "Your project",
    description: "Give me a few details.",
  },
];

export default function HireForm() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    type: "",
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // بعداً اینجا API خودت را صدا بزن
    console.log(formData);

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-32
        text-white
      "
    >
      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/10
          blur-[140px]
        "
      />

      <div className=" relative mx-auto ">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              text-blue-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Let's work together
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              md:text-6xl
            "
          >
            Have a project in mind?
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray-400
              md:text-lg
            "
          >
            Whether you want to build a product, hire me, or discuss an idea,
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Form */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            max-w-6xl
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            shadow-2xl
            backdrop-blur-2xl
            md:p-10
          "
        >
          {/* Progress */}

          {!submitted && (
            <div className="mb-12">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  Step {step + 1} of {steps.length}
                </span>

                <span className="text-sm text-gray-500">
                  {steps[step].title}
                </span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  animate={{
                    width: `${((step + 1) / steps.length) * 100}%`,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {submitted ? (
              <SuccessState key="success" />
            ) : (
              <motion.form
                key={step}
                onSubmit={handleSubmit}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                {/* STEP 1 */}

                {step === 0 && (
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold">
                        What brings you here?
                      </h3>

                      <p className="mt-2 text-gray-500">
                        Choose the option that best describes your inquiry.
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {inquiryTypes.map((item) => {
                        const Icon = item.icon;

                        const selected = formData.type === item.id;

                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => updateField("type", item.id)}
                            className={`
                              group
                              relative
                              rounded-2xl
                              border
                              p-6
                              text-left
                              transition-all
                              duration-300

                              ${
                                selected
                                  ? "border-blue-400/50 bg-blue-500/10"
                                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                              }
                            `}
                          >
                            <div
                              className={`
                                mb-5
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                transition
                                ${
                                  selected
                                    ? "bg-blue-500 text-white"
                                    : "bg-white/5 text-gray-400 group-hover:text-white"
                                }
                              `}
                            >
                              <Icon size={22} />
                            </div>

                            <h4 className="font-medium text-white">
                              {item.title}
                            </h4>

                            <p className="mt-2 text-sm text-gray-500">
                              {item.description}
                            </p>

                            {selected && (
                              <motion.div
                                layoutId="selected"
                                className="
                                  absolute
                                  right-5
                                  top-5
                                  flex
                                  h-6
                                  w-6
                                  items-center
                                  justify-center
                                  rounded-full
                                  bg-blue-500
                                "
                              >
                                <Check size={14} />
                              </motion.div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    <Navigation onNext={nextStep} disabled={!formData.type} />
                  </div>
                )}

                {/* STEP 2 */}

                {step === 1 && (
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold">
                        Tell me about yourself
                      </h3>

                      <p className="mt-2 text-gray-500">
                        So I know who I&apos;m talking to.
                      </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <Input
                        label="Your Name"
                        placeholder="John Doe"
                        icon={<User size={18} />}
                        value={formData.name}
                        onChange={(value) => updateField("name", value)}
                      />

                      <Input
                        label="Email Address"
                        placeholder="john@company.com"
                        icon={<Mail size={18} />}
                        type="email"
                        value={formData.email}
                        onChange={(value) => updateField("email", value)}
                      />

                      <div className="md:col-span-2">
                        <Input
                          label="Company"
                          placeholder="Company name (optional)"
                          icon={<Building2 size={18} />}
                          value={formData.company}
                          onChange={(value) => updateField("company", value)}
                        />
                      </div>
                    </div>

                    <Navigation
                      onBack={previousStep}
                      onNext={nextStep}
                      disabled={!formData.name || !formData.email}
                    />
                  </div>
                )}

                {/* STEP 3 */}

                {step === 2 && (
                  <div>
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold">
                        Tell me about your project
                      </h3>

                      <p className="mt-2 text-gray-500">
                        Give me enough information to understand what you need.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* Budget */}

                      <div>
                        <label className="mb-3 block text-sm text-gray-300">
                          Estimated Budget
                        </label>

                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                          {budgets.map((budget) => {
                            const selected = formData.budget === budget;

                            return (
                              <button
                                key={budget}
                                type="button"
                                onClick={() => updateField("budget", budget)}
                                className={`
                                  rounded-xl
                                  border
                                  px-4
                                  py-3
                                  text-sm
                                  transition

                                  ${
                                    selected
                                      ? "border-blue-400/50 bg-blue-500/10 text-blue-300"
                                      : "border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-white"
                                  }
                                `}
                              >
                                {budget}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Message */}

                      <div>
                        <label className="mb-3 block text-sm text-gray-300">
                          Project Details
                        </label>

                        <div className="relative">
                          <MessageSquare
                            size={18}
                            className="
                              absolute
                              left-4
                              top-4
                              text-gray-500
                            "
                          />

                          <textarea
                            required
                            value={formData.message}
                            onChange={(e) =>
                              updateField("message", e.target.value)
                            }
                            placeholder="Tell me about your idea, goals, timeline, or anything else I should know..."
                            rows={6}
                            className="
                              w-full
                              resize-none
                              rounded-2xl
                              border
                              border-white/10
                              bg-black/20
                              px-12
                              py-4
                              text-sm
                              text-white
                              outline-none
                              transition

                              placeholder:text-gray-600

                              focus:border-blue-400/40
                              focus:ring-4
                              focus:ring-blue-500/5
                            "
                          />
                        </div>
                      </div>
                    </div>

                    <Navigation
                      onBack={previousStep}
                      submit
                      disabled={!formData.message}
                    />
                  </div>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/* Input */
/* -------------------------------------------------- */

function Input({
  label,
  placeholder,
  icon,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-3 block text-sm text-gray-300">{label}</label>

      <div className="relative">
        <div
          className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-500
          "
        >
          {icon}
        </div>

        <input
          type={type}
          required={label !== "Company"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-12
            py-4
            text-sm
            text-white
            outline-none
            transition

            placeholder:text-gray-600

            focus:border-blue-400/40
            focus:ring-4
            focus:ring-blue-500/5
          "
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/* Navigation */
/* -------------------------------------------------- */

function Navigation({
  onBack,
  onNext,
  submit = false,
  disabled = false,
}: {
  onBack?: () => void;
  onNext?: () => void;
  submit?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="mt-10 flex items-center justify-between">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
            transition
            hover:text-white
          "
        >
          <ArrowLeft size={16} />
          Back
        </button>
      ) : (
        <div />
      )}

      {submit ? (
        <button
          type="submit"
          disabled={disabled}
          className="
            group
            flex
            items-center
            gap-3
            rounded-xl
            bg-white
            px-6
            py-3
            text-sm
            font-medium
            text-black
            transition
            hover:bg-blue-400
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <Send size={16} />
          Send Inquiry
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={disabled}
          className="
            group
            flex
            items-center
            gap-3
            rounded-xl
            bg-white
            px-6
            py-3
            text-sm
            font-medium
            text-black
            transition
            hover:bg-blue-400
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Continue
          <ArrowRight
            size={16}
            className="
              transition
              group-hover:translate-x-1
            "
          />
        </button>
      )}
    </div>
  );
}

/* -------------------------------------------------- */
/* Success */
/* -------------------------------------------------- */

function SuccessState() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="
        flex
        min-h-[400px]
        flex-col
        items-center
        justify-center
        text-center
      "
    >
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          delay: 0.15,
        }}
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-emerald-500/10
          text-emerald-400
          ring-1
          ring-emerald-400/20
        "
      >
        <Check size={36} />
      </motion.div>

      <h3 className="mt-8 text-3xl font-bold">Thanks for reaching out!</h3>

      <p className="mt-4 max-w-md leading-7 text-gray-400">
        Your message has been received. I&apos;ll get back to you as soon as
        possible.
      </p>
    </motion.div>
  );
}
