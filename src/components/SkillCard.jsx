function SkillCard({ title, icon, items }) {
    return (
        <>
            <div className="col-md-4">
                <div className="box p-3 h-100">
                    <div className="fw-semibold mb-3">
                        <i className={`bi bi-${icon} ok me-2`}></i>
                        {title}
                    </div>
                    <div className="d-flex flex-wrap gap-1">
                        {items.map((i) => (<span className="tag" key={i}>{i}</span>))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillCard;