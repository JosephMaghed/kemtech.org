import { useState } from "react";
import ReactiveButton from "reactive-button";

const ContactForm = () => {
	// form controller states
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	//Submit button state
	const [buttonState, setButtonState] = useState("idle");
	const onSubmitHandler = (e) => {
		e.preventDefault();
		setButtonState("loading");

		// generate payload for email
		const payload = {
			Name: name,
			Email: email,
			Message: message,
		};

		sendEmail(payload).then((isSent) => {
			if (isSent) {
				setTimeout(() => {
					setButtonState("success");
					// Clear form
					setName(() => "");
					setEmail(() => "");
					setMessage(() => "");
				}, 2000);

				//Change button state to idle
				setTimeout(() => {
					setButtonState("idle");
				}, 4000);
			} else {
				setTimeout(() => {
					setButtonState("error");
				}, 2000);

				//Change button state to idle
				setTimeout(() => {
					setButtonState("idle");
				}, 4000);
			}
		});
	};

	const sendEmail = async (payload) => {
		const res = await fetch("/api/contactFormHandler", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
		return res.status === 500 ? false : true;
	};

	return (
		<section className="">
			<h2 className="sectionTitle">
				{`Love to hear from you,`}
				<br />
				{`Let's get in touch`}
			</h2>

			<form className="space-y-3" onSubmit={onSubmitHandler}>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">What is your name?</span>
					</label>
					<input
						name="Name"
						id="Name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="John Doe"
						required
						className="input-bordered input-primary input w-full max-w-xs "
					/>
				</div>

				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						name="email"
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="example@gmail.com"
						required
						className="input-bordered input-primary input w-full max-w-xs "
					/>
				</div>

				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">
							What is on your mind?
						</span>
					</label>
					<textarea
						id="message"
						name="message"
						value={message}
						className="textarea-primary textarea w-full max-w-md"
						placeholder="Hello kemtech, I want to ask about... "
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</div>

				<div className="mt-4">
					<ReactiveButton
						rounded
						outline={
							buttonState === "success"
								? false
								: buttonState === "error"
								? false
								: buttonState === "idle"
								? true
								: true
						}
						color={
							buttonState === "success"
								? "green"
								: buttonState === "error"
								? "red"
								: "secondary"
						}
						type={"submit"}
						buttonState={buttonState}
						idleText="Submit"
						successText="Sent!"
						errorText="Something is wrong!"
						style={{
							borderColor: "#2E3D49",
						}}
						size="large"
					/>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
