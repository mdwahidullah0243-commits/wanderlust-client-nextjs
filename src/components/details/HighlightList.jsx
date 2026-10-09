import { GiCheckMark } from "react-icons/gi";

const HighlightList = ({ content }) => {
    return (
        <div className="flex items-center gap-2">
            <GiCheckMark size={20} color="#1E9E35" />
            <p className="text-slate-600 font-medium">{content}</p>
        </div>
    );
};

export default HighlightList;