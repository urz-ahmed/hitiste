export default function RulesRegulations() {
    return (
      <div className="container mx-auto max-w-3xl py-12 px-4 md:px-0">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Rules and Regulations</h1>
          <p className="text-muted-foreground">
            Welcome to our comprehensive rules and regulations page for this community. Here, you will find a structured overview of the key
            guidelines and policies that govern our platform. Please review this information carefully to ensure a smooth
            and enjoyable experience.
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold">General Rules</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Respect Others</p>
                    <p className="text-sm">
                      Be kind, courteous, and respectful in all your interactions with other users.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">No Illegal Activities</p>
                    <p className="text-sm">Do not engage in any unlawful or unethical activities on our platform.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Protect Your Account</p>
                    <p className="text-sm">Keep your account information secure and do not share it with others.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Content Guidelines</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">No Harmful Content</p>
                    <p className="text-sm">
                      Do not post or share any content that is illegal, harmful, or violates our community guidelines.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Respect Intellectual Property</p>
                    <p className="text-sm">Do not infringe on the intellectual property rights of others. Dont upload anything related to (DMCA) Copyright infringement.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Accurate Information</p>
                    <p className="text-sm">Ensure that any information you provide is accurate and truthful.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Enforcement</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Violations</p>
                    <p className="text-sm">
                      Violations of these rules and regulations may result in account suspension or termination.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Reporting</p>
                    <p className="text-sm">If you witness any violations, please report them to our moderation team.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">Appeals</p>
                    <p className="text-sm">
                      If you believe your account has been unfairly suspended or terminated, you may appeal the decision.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }