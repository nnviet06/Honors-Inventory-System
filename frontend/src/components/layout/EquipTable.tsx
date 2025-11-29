import { useState, useEffect } from 'react';
import styles from './EquipTable.module.css';
import LocChange from '../modals/LocChange';

interface Equipment {
  id: number;
  model: string;
  equipment_type: string;
  location_id: number;
  room_name: string;
  building_type: string;
}

const EquipTable = () => {
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [selectedItem, setSelectedItem] = useState<Equipment | null>(null);
  const [showLocChangeModal, setShowLocChangeModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

//   useEffect(() => {
//     fetchEquipment();
//   }, []);

useEffect(() => {
  // Fake loading
  setLoading(true);
  
  // Mock data
  const mockData: Equipment[] = [
    {
      id: 1,
      model: "Dell Elite8",
      equipment_type: "Laptop",
      location_id: 1,
      room_name: "HON 4015B",
      building_type: "Office"
    },
    {
      id: 2,
      model: "HP LaserJet",
      equipment_type: "Printer",
      location_id: 2,
      room_name: "HON 3017",
      building_type: "Classroom"
    },
    {
      id: 3,
      model: "Dell Monitor 27\"",
      equipment_type: "Monitor",
      location_id: 3,
      room_name: "HON Warehouse",
      building_type: "Warehouse"
    }
  ];
  
  // Simulate API delay
  setTimeout(() => {
    setEquipmentList(mockData);
    setLoading(false);
  }, 500);
}, []);



  const fetchEquipment = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/equipment');
      
      if (!response.ok) {
        throw new Error('Failed to fetch equipment');
      }
      
      const data = await response.json();
      setEquipmentList(data);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching equipment:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: Equipment) => {
    setSelectedItem(item);
    setShowLocChangeModal(true);
  };

  const handleDelete = async (id: number, model: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${model}?`
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:5000/api/equipment/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete equipment');
      }

      // Refresh the table after successful deletion
      fetchEquipment();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete equipment');
      console.error('Error deleting equipment:', err);
    }
  };

  const handleModalClose = () => {
    setShowLocChangeModal(false);
    setSelectedItem(null);
    // Refresh table after location change
    fetchEquipment();
  };

  if (loading) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <p className={styles.loadingText}>Loading equipment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <p className={styles.errorText}>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {equipmentList.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.emptyText}>
                    No equipment found. Add new equipment to get started.
                  </td>
                </tr>
              ) : (
                equipmentList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.model}</td>
                    <td>{item.equipment_type}</td>
                    <td>
                      {item.room_name} ({item.building_type})
                    </td>
                    <td>
                      <div className={styles.actionButtons}>
                        <button
                          className={styles.editButton}
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className={styles.deleteButton}
                          onClick={() => handleDelete(item.id, item.model)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showLocChangeModal && selectedItem && (
        <LocChange
          item={selectedItem}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default EquipTable;