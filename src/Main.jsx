function Main() {
    return <div className="app-main">

        <div className="app-main-note-edit">
            <input type="text" id="title" autoFocus placeholder="Write your title here..." maxLength={100} />
            <textarea id="body" placeholder="Write your note here..." maxLength={1000} />

        </div>

        <div className="app-main-note-preview">
            <h1 className="preview-title">Title</h1>
            <div className="markdown-preview">note preview</div>

        </div>

    </div>

};

export default Main;