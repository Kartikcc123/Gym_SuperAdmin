import { motion } from 'framer-motion';

const DataTable = ({ columns, rows, rowKey, renderActions }) => (
  <div className="overflow-hidden rounded-3xl border border-white/10">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-white/10 text-left">
        <thead className="bg-white/[0.03]">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {column.label}
              </th>
            ))}
            {renderActions && <th className="px-4 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 bg-black/10">
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={row[rowKey]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: rowIndex * 0.04 }}
              className="hover:bg-white/[0.03]"
            >
              {columns.map((column) => (
                <td key={column.key} className="whitespace-nowrap px-4 py-4 text-sm text-white/85">
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
              {renderActions && <td className="px-4 py-4">{renderActions(row)}</td>}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DataTable;
