import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Upload, 
  FolderPlus, 
  File, 
  Folder, 
  MoreVertical, 
  Download, 
  Trash2, 
  Search,
  HardDrive,
  Shield,
  Clock
} from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  size: string;
  modified: string;
}

export function Dashboard() {
  const [files] = useState<FileItem[]>([
    { id: '1', name: 'Documents', type: 'folder', size: '2.4 GB', modified: '2 days ago' },
    { id: '2', name: 'Photos', type: 'folder', size: '5.8 GB', modified: '1 week ago' },
    { id: '3', name: 'Project_Proposal.pdf', type: 'file', size: '1.2 MB', modified: 'Today' },
    { id: '4', name: 'Budget_2026.xlsx', type: 'file', size: '456 KB', modified: 'Yesterday' },
    { id: '5', name: 'Backup', type: 'folder', size: '1.1 GB', modified: '3 days ago' },
    { id: '6', name: 'Presentation.pptx', type: 'file', size: '8.9 MB', modified: 'Today' },
  ]);

  const [dragOver, setDragOver] = useState(false);

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <HardDrive className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Storage Used</p>
                <p className="text-2xl font-bold">4.2 GB <span className="text-sm text-gray-500">/ 10 GB</span></p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Encrypted Files</p>
                <p className="text-2xl font-bold">127</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Last Backup</p>
                <p className="text-2xl font-bold">2h ago</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8"
        >
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold"
            >
              <Upload className="w-5 h-5" />
              Upload Files
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors"
            >
              <FolderPlus className="w-5 h-5" />
              New Folder
            </motion.button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search files..."
              className="w-full md:w-64 pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </motion.div>

        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
          }}
          className={`mb-8 p-12 rounded-2xl border-2 border-dashed transition-all ${
            dragOver
              ? 'border-purple-500 bg-purple-500/10'
              : 'border-gray-700 bg-gray-900/30'
          }`}
        >
          <div className="text-center">
            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-500" />
            <h3 className="text-xl font-semibold mb-2">Drop files here to upload</h3>
            <p className="text-gray-400">or click the Upload Files button above</p>
          </div>
        </motion.div>

        {/* Files Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6">Your Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    item.type === 'folder'
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-600'
                      : 'bg-gradient-to-br from-purple-600 to-pink-600'
                  }`}>
                    {item.type === 'folder' ? (
                      <Folder className="w-6 h-6" />
                    ) : (
                      <File className="w-6 h-6" />
                    )}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-700 rounded-lg"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Info */}
                <h3 className="font-semibold mb-1 truncate">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.size}</p>
                <p className="text-xs text-gray-500">{item.modified}</p>

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-700 hover:bg-purple-600 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-700 hover:bg-red-600 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
