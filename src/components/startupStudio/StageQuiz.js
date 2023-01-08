//icons
import { useState } from "react";
import { MdContactSupport } from "react-icons/md";

export default function StageQuiz() {
	let [currentQuestion, setCurrentQuestion] = useState(" ");

	let question;
	return (
		<div>
			<div className="flex items-center">
				<span>
					<MdContactSupport />
				</span>
				<p>Not Sure Which Program Suits You ?</p>
			</div>
			<p className="subtitle">Let us help you</p>

			<div>
				<p>This is a question?</p>
				<button className="btn-outline btn-primary btn w-24 rounded-full">
					Yes
				</button>
				<button className="btn-outline btn-primary btn w-24 rounded-full">
					No
				</button>
			</div>
		</div>
	);
}
