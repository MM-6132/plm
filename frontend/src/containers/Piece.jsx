import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Piece() {
    return (
        <div className="grid-duo">
            <div>

            </div>
            <div className="grid-quatro-line">
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Folder conception</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Folder design</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>Folder production</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>MRO</p>
                </div>
                <div className="button-menu">
                    <PlayCircleIcon className="play-circle-icon"/>
                    <p>All documents</p>
                </div>
            </div>

        </div>
    );
}

export default Piece;