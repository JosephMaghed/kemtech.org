const FAQ = () => {
	return (
		<section className="container mx-auto md:w-3/4">
			<h2 className="subtitle">FAQ</h2>

			<div className="mt-8 w-full md:w-1/2">
				<div
					tabIndex={0}
					className="collapse-arrow rounded-box collapse border border-base-300 bg-base-100"
				>
					<div className="collapse-title text-xl font-medium">
						Focus me to see content
					</div>
					<div className="collapse-content">
						<p>
							tabIndex={0} attribute is necessary to make the div
							focusable
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default FAQ;
