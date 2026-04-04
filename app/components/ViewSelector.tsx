export default function ViewSelector() {
    return (
        <div className="flex space-x-4">
            <div>Descripción</div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Preview</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded">OpenGraph view</button>
        </div>
    );
}