import { Request, Response } from 'express';

import Client from 'src/models/client';

export const getAllClient = async (req: Request, res: Response) => {
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

export const getClientById = async (req: Request, res: Response) => {
  try {
    const client = await Client.findOne({ _id: req.params.id, logicDelete: false });
    if (!client) {
      return res.status(404).json({
        message: `Could not find a client by the id of ${req.params.id}.`,
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
      message: `Could not find an client by the id of ${req.params.id}.`,
      data: undefined,
      error: true,
    });
  }
};
export const createClient = async (req: Request, res: Response) => {
  try {
    const client = new Client({
      businessName: req.body.businessName,
      cuit: req.body.cuit,
      ivaCondition: req.body.ivaCondition,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
    });
    const result = await client.save();
    return res.status(201).json({
      message: 'Client created successfully.',
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
export const updateClient = async (req: Request, res: Response) => {
  try {
    const clientToUpdate = await Client.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false },
      req.body,
      { new: true },
    );
    if (!clientToUpdate) {
      return res.status(404).json({
        message: `Id ${req.params.id} does not exist.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Client updated successfully.',
      data: clientToUpdate,
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
export const activeClient = async (req: Request, res: Response) => {
  try {
    const clientToChange = await Client.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false, isActive: false },
      { isActive: true },
      { new: true },
    );
    if (!clientToChange) {
      return res.status(404).json({
        message: `Id ${req.params.id} does not exist or is already active.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Client updated successfully.',
      data: clientToChange,
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
export const inactiveClient = async (req: Request, res: Response) => {
  try {
    const clientToChange = await Client.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false, isActive: true },
      { isActive: false },
      { new: true },
    );
    if (!clientToChange) {
      return res.status(404).json({
        message: `Id ${req.params.id} does not exist or is already inactive.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Client updated successfully.',
      data: clientToChange,
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
export const deleteClient = async (req: Request, res: Response) => {
  try {
    const clientToChange = await Client.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false },
      { logicDelete: true },
      { new: true },
    );
    if (!clientToChange) {
      return res.status(404).json({
        message: `Id ${req.params.id} does not exist.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Client deleted successfully.',
      data: clientToChange,
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
