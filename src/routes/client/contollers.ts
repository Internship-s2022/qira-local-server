import { Request, Response } from 'express';

import Client from 'src/models/client';

const getAllClient = async (req: Request, res: Response) => {
  try {
    const allClients = await Client.find({ ...req.query, logicDelete: false });
    return res.status(200).json({
      message: 'Showing Clients.',
      data: allClients,
      error: false,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: `Something went wrong: ${error.message}`,
      data: undefined,
      error: true,
    });
  }
};

const getClientById = async (req: Request, res: Response) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({
        message: `Could not found an client by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: `Showing the specified client by the id of ${req.params.id}.`,
      data: client,
      error: false,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: `Could not found an client by the id of ${req.params.id}.`,
      data: undefined,
      error: true,
    });
  }
};
const createClient = async (req: Request, res: Response) => {
  try {
    const client = new Client({
      businessName: req.body.businessName,
      cuit: req.body.cuit,
      ivaCondition: req.body.ivaCondition,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      isActive: req.body.isActive,
      logicDelete: req.body.logicDelete,
    });
    const result = await client.save();
    return res.status(201).json({
      message: 'Client created successfully',
      data: result,
      error: false,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
      data: undefined,
      error: true,
    });
  }
};

export default {
  getAllClient,
  getClientById,
  createClient,
};
